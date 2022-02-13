<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MedicineResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "category" => $this->category,
            "category_id" => $this->category_id,
            "dosage" => $this->dosage,
            "generic" => $this->generic,
            "generic_id" => $this->generic_id,
            "image" => $this->image,
            "manufacturer" => $this->manufacturer,
            "manufacturer_id" => $this->manufacturer_id,
            "prices" => $this->prices,
            "name" => $this->name,
            "quantity" => 1,
        ];
    }
}
