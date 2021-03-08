import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';


const propTypes = {
  ...SectionTilesProps.types
}


const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Tipos de sites que',
    title_mark: 'desenvolvemos',
    // paragraph: 'torne-se um cliente e desenvolva seu negocio com agente'
  };

  return (

    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      className="svg_institu"
                      src={require('./../../assets/images/acos_services_Institutional.svg')}
                      alt="Features tile icon 01"
                      width={250} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Sites Institucionais
                    </h4>
                  <p className="m-0 text-sm">
                    Forneça informações relevantes sobre seus produtos e serviços para seus clientes em potencial, para que eles o contatem diretamente, demonstrando interesse por eles.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      className="svg_store"
                      src={require('./../../assets/images/acos_services_store.svg')}
                      alt="Features tile icon 02"
                      width={250} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Lojas Virtuais
                    </h4>
                  <p className="m-0 text-sm">
                    Mostre seus produtos como um catálogo online ou venda seus produtos diretamente em seu site.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      className="svg_landpage"
                      src={require('./../../assets/images/acos_services_landpages.svg')}
                      alt="Features tile icon 03"
                      width={250} />
                  </div>
                </div>

                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Landings Pages
                    </h4>
                  <p className="m-0 text-sm">
                    Ideais para as suas campanhas digitais, conseguem captar o cliente com design moderno e conteúdos úteis para efetuarem uma compra, assinatura, etc.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="center-content infor_plus mt-20">
          <h5 className="plus_title"><span className="text-color-primary-gradient font-height">Desenvolvemos o site</span> de a acordo com suas necessidades e acrescentamos tudo isso para que ele fique visivel aos mecanismo de buscas</h5>
          <div className="infor_tags">
            <ul className="tags_ul">
              <li><i class="bi bi-check2-circle"></i>  Segurança WordPress Defender</li>
              <li><i class="bi bi-check2-circle"></i>  Gateways para Pagamento</li>
              <li><i class="bi bi-check2-circle"></i>  Integração de Rede Socias</li>
              <li><i class="bi bi-check2-circle"></i>  Painel Administrativo</li>
              <li><i class="bi bi-check2-circle"></i>  Google Analytics</li>
              <li><i class="bi bi-check2-circle"></i>  Pixel Facebook</li>
              <li><i class="bi bi-check2-circle"></i>  Design Responsivo</li>
              <li className="custon-mb-hidden"><i class="bi bi-check2-circle"></i>  Paginas Fluidas </li>
              <li><i class="bi bi-check2-circle"></i>  Google Maps</li>
              <li><i class="bi bi-check2-circle"></i>  SEO</li>
            </ul>
            <h2>Todo site Completamente <span className="text-color-primary-gradient">Personalizavel</span></h2>
            <ButtonGroup>
              {/* <Button tag="a" target="-blank" color="primary" wideMobile href="#">
                    Ver Portifolio
                    </Button> */}
              <Button tag="a" target="-blank" className="primary-custons" wideMobile href="https://api.whatsapp.com/send?phone=5573991121575&text=Oi%20!!%20Preciso%20de%20informa%C3%A7%C3%A3o%20..">
                <span>Solicitar Orçamento</span>
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;