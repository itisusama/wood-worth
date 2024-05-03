const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `

<!-- START:: Styles -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <!-- owl carousel CSS -->
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
    <!-- font awesome CSS -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!-- swiper CSS -->
    <link rel="stylesheet" href="assets/css/slick.css" />
    <!-- style CSS -->
    <link rel="stylesheet" href="assets/css/style.css" />
    <!-- Price range -->
    <link rel="stylesheet" href="assets/css/price_rangs.css">
    <link rel="stylesheet" href="assets/css/nice-select.css">
    <!-- END:: Styles -->

    <footer class="footer_part">
        <div class="container">
            <div class="row justify-content-around">
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="single_footer_part">
                        <h4>Shop</h4>
                        <ul class="list-unstyled">
                            <li><a href="category.html">Shop Category</a></li>
                            <li><a href="allproducts.html">All Products</a></li>
                            <li><a href="single-product.html">Product Details</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="single_footer_part">
                        <h4>Pages</h4>
                        <ul class="list-unstyled">
                            <li><a href="checkout.html">Product Checkout</a></li>
                            <li><a href="cart.html">Shoping Cart</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="single_footer_part">
                        <h4>Features</h4>
                        <ul class="list-unstyled">
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Brand Assets</a></li>
                            <li><a href="">Investor Relations</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="single_footer_part">
                        <h4>Resources</h4>
                        <ul class="list-unstyled">
                            <li><a href="">Guides</a></li>
                            <li><a href="">Research</a></li>
                            <li><a href="">Experts</a></li>
                            <li><a href="">Agencies</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div class="copyright_part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="copyright_text">
                            <P>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</P>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="footer_icon social_icon">
                            <ul class="list-unstyled">
                                <li><a href="#" class="single_social_icon fab fa-facebook-f"></a></li>
                                <li><a href="#" class="single_social_icon fab fa-twitter"></a></li>
                                <li><a href="#" class="single_social_icon fas fa-globe"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- START:: JS -->
    <script src="assets/js/jquery-1.12.1.min.js"></script>
    <!-- popper js -->
    <script src="assets/js/popper.min.js"></script>
    <!-- bootstrap js -->
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- easing js -->
    <script src="assets/js/jquery.magnific-popup.js"></script>
    <!-- particles js -->
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/jquery.nice-select.min.js"></script>
    <!-- slick js -->
    <script src="assets/js/slick.min.js"></script>
    <script src="assets/js/jquery.counterup.min.js"></script>
    <script src="assets/js/jquery.ajaxchimp.min.js"></script>
    <script src="assets/js/jquery.form.js"></script>
    <script src="assets/js/jquery.validate.min.js"></script>
    <!-- custom js -->
    <script src="assets/js/custom.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous" ></script>

`

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);