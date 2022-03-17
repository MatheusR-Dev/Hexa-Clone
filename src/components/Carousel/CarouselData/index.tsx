import Icon from "../../../assets/icon.svg";
import GPlay from "../../../assets/playstore.svg";
import Mac from "../../../assets/macstore.svg";
import Micro from "../../../assets/microbank.svg";
import WhiteL from "../../../assets/whitelabel.svg";
import Gentrega from "../../../assets/getzentrega.svg";
import GFood from "../../../assets/getzfood.svg";
import Gestor from "../../../assets/gestorgetz.svg";
import Pedido from "../../../assets/getzpedido.svg";
import Radio from "../../../assets/radio.svg";
import NLogo from "../../../assets/newlogo.svg";
import MicroLogo from "../../../assets/micrologo.svg";
import GFoodLogo from "../../../assets/logogetz.svg";
import GestorLogo from "../../../assets/gestor.svg";
import GEntregaLogo from "../../../assets/entrega.svg";
import WhiteLogo from "../../../assets/whitel.svg";
import RadioLogo from "../../../assets/hexaradio.svg";
import EPLogo from "../../../assets/epedido.svg";
import GFoodTraco from "../../../assets/tracinho.svg";
import FMTraco from "../../../assets/tracinho87Fm.svg";
import WhiteLTraco from "../../../assets/tracinhoCarteira.svg";
import EPTraco from "../../../assets/tracinhoEPedido.svg";
import GEntregaTraco from "../../../assets/tracinhoGetzEntrega.svg";
import GestorTraco from "../../../assets/tracinhoGetzGestor.svg";
import MBankTraco from "../../../assets/tracinhoMicroBank.svg";
import Empty from "../../../assets/blank.svg"


export const Data = {
  MicroBank: [
    {
      Title: "Seu banco digital está pronto!",
      Text: "Comece sua Fintech, sem grandes investimentos, sem burocracia e de forma super ágil.",
      IconWeb: Icon, 
      IconMac: Mac,
      IconGPlay: GPlay,
      Image: Micro,
      ImageIcon: MicroLogo,
      Blank: Empty,
      Traco: MBankTraco,
    },
  ],

  Whitelabel: [
    {
      Title: "Carteira whitelabel",
      Text: "A carteira digital com a sua marca. Potencialize o seu negócio fidelizando seus clientes  oferecendo o melhor do bancos digitais.",
      Icon: NLogo,
      Image: WhiteL,
      ImageIcon: WhiteLogo,
      Blank: Empty,
      Traco: WhiteLTraco,
    },
  ],

  GetzEntrega: [
    {
      Title: "Getz para entregadores",
      Text: "Você que faz entregas e deseja ser um entregador Getz Food, baixe o app e venha fazer parte do Getz Entrega.",
      Icon: NLogo,
      Image: Gentrega,
      ImageIcon: GEntregaLogo,
      Blank: Empty,
      Traco: GEntregaTraco,
    },
  ],

  GetzFood: [
    {
      Title: "Paixão por delivery",
      Text: "Peça seu delivery de comida de forma fácil e rápida! Também aproveite os melhores cupons e ganhe cashback em suas compras.",
      Icon: NLogo,
      Image: GFood,
      ImageIcon: GFoodLogo,
      Blank: Empty,
      Traco: GFoodTraco,
    },
  ],

  GetzGestor: [
    {
      Title: "Gerencie seu restaurante no Getz Food!",
      Text: "Receba pedidos, gerencie sua loja, acompanhe seu desempenho e receba feedback de clientes!",
      Icon: Icon,
      Image: Gestor,
      ImageIcon: GestorLogo,
      Blank: Empty,
      Traco: GestorTraco,
    },
  ],
  EPedido: [
    {
      Title: "Acompanhe a venda de representantes e prepostos.",
      Text: "Potencialize suas vendas, acompanhe seus clientes. Ferramenta ideal para indústrias, varejo e distribuidoras.",
      Icon: NLogo,
      Image: Pedido,
      ImageIcon: EPLogo,
      Blank: Empty,
      Traco: EPTraco,
    },
  ],
  HexaRadio: [
    {
      Tela: "HexaRadio",
      Title: "Hexarádio, o player online para a sua rádio",
      Text: "Com a hexarádio você tem o seu próprio player para transmitir sua rádio em todo lugar e para qualquer pessoa.",
      Image: Radio,
      ImageIcon: RadioLogo,
      Blank: Empty,
      Traco: FMTraco,
    },
  ],
};


