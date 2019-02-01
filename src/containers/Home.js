import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Carousel from '../components/Carousel.js'
import BackToTopBtn from '../components/BackToTopBtn.js'
import { Container, Grid, Button, Icon } from 'semantic-ui-react'
import InspirationCard from '../components/InspirationCard.js'
import { Link } from '@reach/router'
import './Home.css'
import { actions } from '../store.js'
import { api, getAllInspirations } from '../api.js'

const textMosaiq = {
  display: 'flex',
  flex: '1 1',
  flexDirection: 'column',
  justifyContent: 'center'
}

class Home extends Component {
  animateCarousel = () => {
    if (this.props.currentSlide === this.props.mySlides.length - 1) {
      actions.updateCurrentSlide(0)
    } else {
      actions.updateCurrentSlide(this.props.currentSlide + 1)
    }
  }

  componentDidMount() {
    getAllInspirations('fo').then(actions.loadInspirations)

    setInterval(this.animateCarousel, 9000)
  }

  render() {
    return (
      <Container fluid>
        <Header />
        <Carousel
          slides={this.props.mySlides}
          currentSlide={this.props.currentSlide}
        />
        <div className="quote">
          <p>
            Exploration somatique. Intuition. Mouvement libre.
            <br />
            Yoga organique. Shiatsu. Curiosité.
          </p>
        </div>
        <div id="forme-parallax-2" />
        <div className="parallax" />
        <div id="forme-parallax-1" />
        <section>
          <Grid id="about_me">
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={8}
              className="about_me_text"
            >
              <div className="text">
                <h2>À propos de moi ...</h2>
                <p>
                  Bonjour, je m’appelle Alice. Je suis professeur de yoga
                  certifiée yoga alliance. J’ai réalisé 300h de formation auprès
                  de Gemma Mallol directrice de Still Flowing yoga..
                </p>
                <p>
                  Mon souhait est d'offrir des cours créatifs et bienveillants
                  dans le respect des corps et des personnalités de chacun.
                </p>
                <Link to="/about-me">En savoir plus</Link>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <img
                src={`${api}/images/alice-ollagnon.jpg`}
                alt="Alice Ollagnon"
              />
            </Grid.Column>
          </Grid>
        </section>
        <section>
          <Grid>
            <div className="greenBanner colorAnimation" id="shiatsu">
              <h2>Yoga</h2>
              <p>
                Je propose un yoga intuitif et bienveillant, inspiré de mes
                différentes pratiques ( vinyasa, shiatsu, qi gong,
                mindfullness).
              </p>
              <p>
                Mes cours sont basés sur les principes fondamentaux de
                l'énergétique chinoise (adaptation de la pratique en fonction de
                l'heure de la journée, et de la saison) et soutenue par des
                exercices de méditation en pleine conscience.
              </p>
              <p>
                En alignant la pratique des asanas à celle de la méditation,
                chacun apprivoise peu à peu son corps, développe son intuition
                et son mouvement naturel.
              </p>
              <p>
                Mon envie ? Révéler l'intelligence naturelle de votre corps, et
                vous faire prendre conscience de vos possibilités infinies.
              </p>
              <Link to="/yoga">
                <Button>En savoir plus</Button>
              </Link>
            </div>
          </Grid>
        </section>

        <section className="mosaiq">
          <Grid>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <div
                id="testImg"
                style={{
                  backgroundImage: `url(${api}/public/images/stages-eleves.jpg)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  minHeight: '600px'
                }}
              />
              {/* <figure className="diapo">
                              <img src={`${api}/images/cours-cadre.jpg`} alt='informations stages' />
                            </figure> */}
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={8}
              style={textMosaiq}
            >
              <div className="text" id="yoga">
                <article className="txtCenter">
                  <h2>Stages</h2>
                  <p>
                    J’organise régulièrement des stages hors et dans Paris, afin
                    de vous offrir des bulles de ressourcement et explorer plus
                    intensément votre pratique.
                  </p>
                  <Link to="/stages">En savoir plus</Link>
                </article>
              </div>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={8}
              style={textMosaiq}
            >
              <div className="text" id="stages">
                <article className="txtCenter">
                  <h2>Shiatsu</h2>
                  <p>
                    Après 4 ans d’études auprès de Bernard Bouheret, directeur
                    de l’école de shiatsu thérapeuthique de Paris. Je reçois
                    aujourd’hui à Paris République, ainsi qu’en entreprise.
                  </p>
                  <p>
                    Grâce au shiatsu, et au yoga j’accompagne les périodes de
                    transition professionnelle et ou personnelle, j’apporte un
                    soutien dans la gestion des troubles anxieux et ou
                    dépressif, ainsi que les personnes ayant besoin de
                    ressources pour gérer le stress.{' '}
                  </p>
                  <Link to="/shiatsu">En savoir plus</Link>
                </article>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <div
                id="testImg"
                style={{
                  backgroundImage: `url(${api}/images/shiatsu-domicile.jpg)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  minHeight: '600px'
                }}
              />
              {/* <figure className="diapo">
                <img src={`${api}/images/stage-session-cadre.jpg`} alt='informations shiatsu' />
              </figure> */}
            </Grid.Column>
          </Grid>
        </section>
        <div id="forme-parallax-3" className="rotate" />
        <div className="parallax" />
        <section>
          <h2 style={{ marginTop: '50px' }}>Inspirations</h2>
          <Grid doubling columns={4} id="inspiration-bloc">
            {' '}
            {/* centered */}
            <Grid id="inspirations">
              {this.props.inspirations
                .sort((a, b) => b.createdAt - a.createdAt)
                .slice(0, 4)
                .map(i => (
                  <InspirationCard inspiration={i} key={i.id} />
                ))}
            </Grid>
            <Grid.Row id="see-all-inspi">
              <p>
                <Link to="/inspirations">Voir toutes les inspirations</Link>
              </p>
            </Grid.Row>
          </Grid>
        </section>
        <div id="avis" className="quote">
          <p>
            "Une séance de shiatsu avec Alice est bien plus qu'un massage. Alice
            est à l'écoute de l'autre et de son corps avec finesse. Elle a eu
            une intuition aiguisée qui a permis de répondre avec justesse à ce
            dont j'avais besoin. On est dans une bulle de douceur ou le temps
            est suspendu. Je recommande, et pas seulement quand on ne se sent
            pas bien, mais de manière régulière."
          </p>
          <p>Julie, Cours du mardi</p>
        </div>
        <section id="contact-background">
          <h2 id="contact">Me contacter</h2>
          <p id="contactText">
            Si vous avez la moindre question concernant les cours, les stages,
            ou le shiatsu à me poser, n'hésitez pas à me contacter par email ou
            via Facebook. Je vous répondrai au plus vite.
          </p>
          <a
            href="https://www.facebook.com/alice.yoga.shiatsu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="contactButton">
              <Icon name="facebook f" />
              Facebook
            </Button>
          </a>
          <a
            href="https://www.instagram.com/aliceollagnon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="contactButton">
              <Icon name="instagram" />
              Instagram
            </Button>
          </a>
          <a href="mailto:alice.ollagnon@gmail.com">
            <Button className="contactButton">
              <Icon name="mail" />
              Email
            </Button>
          </a>
          <BackToTopBtn />
        </section>
        <Footer />
      </Container>
    )
  }
}

export default Home
