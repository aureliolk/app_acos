import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
 

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );



  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Agência de desenvolvimento para sites <span className="text-color-primary-gradient">Profissionais</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Criamos o site de sua empresa com as melhores práticas em <span className="text-color-primary-gradient fw-700">SEGURANÇA </span>,<span className="text-color-primary-gradient fw-700">FUNCIONALIDADES</span> e <span className="text-color-primary-gradient fw-700">RESPONSIVIDADE</span> aprimoradas para uma melhor experiência do Usuário.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
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
          <div className="hero-figure reveal-from-bottom illustration-element-01 d-flex" > 
          <Image
                className="has-shadow"
                src={require('./../../assets/images/acos_service_video_1.gif')}
                alt="Hero"
                width={'100%'}
                />
          <div className='container-xs margin'>      
          <h2 className="mt-20 mb-20 reveal-from-bottom" data-reveal-delay="200">
              Sites Profissionais que você mesmo pode customizar para <span className="text-color-primary-gradient">Seu Negócio Online</span>
            </h2>
           </div>
          <Image
                className="has-shadow"
                src={require('./../../assets/images/acos_service_video_2.gif')}
                alt="Hero"
                width={'100%'}
                />                 
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;