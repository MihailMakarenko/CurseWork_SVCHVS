import "./footerDown.css";

function FooterDown() {
  return (
    <div>
      <SocialNetwork></SocialNetwork>
      <div className="ancors">
        <a>Согласие на обработку данных</a>
        <a>Служба поддержки</a>
        <a>Политика конфиденциальности</a>
      </div>
    </div>
  );
}

function SocialNetwork() {
  return (
    <div className="social-network">
      <LogoSocialNetwork
        href="rst"
        src="../img/Facebook.png"
      ></LogoSocialNetwork>
      <LogoSocialNetwork href="rst" src="../img/Vk.png"></LogoSocialNetwork>
      <LogoSocialNetwork
        href="rst"
        src="../img/Twitter.png"
      ></LogoSocialNetwork>
      <LogoSocialNetwork
        href="rst"
        src="../img/Youtube 1.png"
      ></LogoSocialNetwork>
    </div>
  );
}

function LogoSocialNetwork(props) {
  return (
    <a href={props.href}>
      <img src={props.src} alt={props.alt} />
    </a>
  );
}
export default FooterDown;
