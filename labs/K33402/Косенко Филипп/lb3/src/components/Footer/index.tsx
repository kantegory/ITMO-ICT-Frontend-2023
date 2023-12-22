import "./Footer.sass";
import img1 from './facebook.png';
import img2 from './instagram.svg'
import img3 from './pinterest.svg'

export const Footer = () => {
    return(
        <footer className="footer">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.43030788928!2d37.64442107712951!3d55.768397990789545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a636edcd2ad%3A0x4c2ca101e2c8c617!2z0JzRj9GB0L3QuNGG0LrQuNC5INC_0YAt0LQsIDQvMywg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEwNzA3OA!5e0!3m2!1sru!2sde!4v1702029165654!5m2!1sru!2sde" className="f_bg"></iframe>
        <div className="cont">
            <div className="footer__content">
                <address className="footer__adr">Москва, Мясницкий проезд, д.3с1</address>
                <a href="tel:898834344343" className="footer__phone">8 (499) 922-89-74</a>
                <div className="footer-social">
                    <a href="" className="footer-social__item"><img src={img1} alt=""/></a>
                    <a href="" className="footer-social__item"><img src={img2} alt=""/></a>
                    <a href="" className="footer-social__item"><img src={img3} alt=""/></a>
                </div>
            </div>
        </div>
    </footer>
    );
};