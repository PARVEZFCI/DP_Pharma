<!-- Bottom scripts (common) -->
<script src="/backend_assets/assets/js/gsap/TweenMax.min.js"></script>
<script src="/backend_assets/assets/js/jquery-ui/js/jquery-ui-1.10.3.minimal.min.js"></script>
<script src="/backend_assets/assets/js/bootstrap.js"></script>
<script src="/backend_assets/assets/js/joinable.js"></script>
<script src="/backend_assets/assets/js/resizeable.js"></script>
<script src="/backend_assets/assets/js/neon-api.js"></script>
<script src="/backend_assets/assets/js/jquery.sparkline.min.js"></script>

<!-- JavaScripts initializations and stuff -->
<script src="/backend_assets/assets/js/neon-custom.js"></script>

<!-- Demo Settings -->
<script src="/backend_assets/assets/js/neon-demo.js"></script>
<script src="/backend_assets/assets/js/popper.js/dist/umd/popper.min.js"></script>

<!-- Scripts -->
<script>
    $(document).on("click",".Posprint",function(){
        let url=$(this).attr("data-url");
        printPage(url);
    })
    function closePrint() {
        document.body.removeChild(this.__container__);
    }
    function setPrint() {
        this.contentWindow.__container__ = this;
        this.contentWindow.onbeforeunload = closePrint;
        this.contentWindow.onafterprint = closePrint;
        this.contentWindow.focus(); // Required for IE
        this.contentWindow.print();
    }
    function printPage(sURL) {
        var oHiddFrame = document.createElement("iframe");
        oHiddFrame.onload = setPrint;
        oHiddFrame.style.visibility = "hidden";
        oHiddFrame.style.position = "fixed";
        oHiddFrame.style.right = "0";
        oHiddFrame.style.bottom = "0";
        oHiddFrame.src = sURL;
        document.body.appendChild(oHiddFrame);
    }
</script>
<script src="/js/app.js"></script>
@yield('js')
