<?php


namespace App\Services;

use App\Models\OrderBaseInfo;
use charlieuki\ReceiptPrinter\ReceiptPrinter as ReceiptPrinter;

class PrintService
{
    protected $invoiceData;
    protected $printer;

    public function __construct()
    {
        $this->printer = new ReceiptPrinter;
        $this->printer->init(
            config('receiptprinter.connector_type'),
            config('receiptprinter.connector_descriptor')
        );
    }

    public function getInvoice($id)
    {
        $this->invoiceData = OrderBaseInfo::Related()->whereId($id)
            ->get()
            ->map(function ($data) {
                foreach (collect($data->order_medicine_info)->sortBy('medicine.name') as $value) {
                    $order_medicine_infos[] = [
                        "id"                => $value->id,
                        "medicine_id"       => $value->medicine_id,
                        "medicine_name"     => $value->medicine_id ? $value->medicine->name : "",
                        "category"          => $value->medicine_id ?
                            ($value->medicine->category->code ?? $value->medicine->category->category_name)
                            : "",
                        "price"             => $value->medicine_id ? $value->medicine_price : "",
                        "medicine_quantity" => $value->medicine_id ? $value->quantity : "",
                        "unit"              => $value->unit_id ? $value->unit->unit->unit_name : "",
                        "sub_total"         => $value->medicine_id ? $value->sub_total : "",
                        "discount"          => $value->medicine_id ? $value->discount : "",
                        "discount_price"    => $value->medicine_id ? $value->discount_price : "",
                    ];
                    $medicine_id[] = $value->medicine_id;
                }

                return [
                    "id"               => $data->id,
                    "invoice_code"     => $data->order_code,
                    "invoice_date"     => $data->date,
                    "grand_total"      => $data->total_price,
                    "total_paid"       => $data->total_paid,
                    "total_due"        => $data->total_due,
                    "customer_name"    => $data->customer ? $data->customer->name : "",
                    "customer_email"   => $data->customer ? $data->customer->email : "",
                    "customer_phone"   => $data->customer_details ? $data->customer_details->phone : "",
                    "customer_address" => $data->customer_details ? $data->customer_details->address : "",
                    "pharmacy_name"    => $data->customer_details ? $data->customer_details->pharmacy_name : "",
                    "customer_type"    => $data->customer ?
                        ($data->customer->customer_type == 1 ? $data->customer->customer_type = "Retailer"
                            : $data->customer->customer_type = "Regular")
                        : "",
                    "order_medicine_infos" => $order_medicine_infos,
                    "medicine_id"          => $medicine_id,
                    "created_at"           => $data->created_at,
                    "date"                 => $data->date
                ];
            })->first();

        return $this->invoiceData;
    }

    public function makeReceipt()
    {
        $store_name = 'Dhaka Pharmacy';
        $store_address = 'Joynal Tower, Joynal Market Dokkinkhan, Uttara, Dhaka-1230';
        $store_phone = '01646981922-25';
        $store_email = '';
        $store_website = '';
        $tax_percentage = 0;
        $transaction_id = $this->invoiceData['id'];

        $this->printer
            ->setStore("", $store_name, $store_address, $store_phone, $store_email, $store_website);

        $items = [];
        foreach ($this->invoiceData['order_medicine_infos'] as $key => $value) {
            $this->printer->addItem($value['medicine_name'], $value['medicine_quantity'], $value['discount_price']);
        }

        // Set tax
        $this->printer->setTax($tax_percentage);

        // Calculate total
        $this->printer->calculateSubTotal();
        $this->printer->calculateGrandTotal();

        // Set transaction ID
        $this->printer->setTransactionID($transaction_id);

        // Set qr code
        $this->printer->setQRcode([
            'tid' => $transaction_id,
        ]);

        // Print receipt
        $this->printer->printReceipt();
    }
}
