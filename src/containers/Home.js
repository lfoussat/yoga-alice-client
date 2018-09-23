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

class Home extends Component {
  animateCarousel = () => {
    if (this.props.currentSlide === this.props.mySlides.length - 1) {
      actions.updateCurrentSlide(0)
    } else {
      actions.updateCurrentSlide(this.props.currentSlide + 1)
    }
  }

  componentDidMount () {
    getAllInspirations('fo')
      .then(actions.loadInspirations)

    setInterval(this.animateCarousel, 9000)
  }

  render () {
    return (
      <Container fluid>
        <Header />
        <Carousel slides={this.props.mySlides} currentSlide={this.props.currentSlide} />
        <div className="quote">
          <p>Exploration somatique. Intuition. Mouvement libre.<br />
            Yoga organique. Shiatsu. Curiosité.</p>
        </div>
        <div id="forme-parallax-2"></div>
        <div className="parallax"></div>
        <div id="forme-parallax-1"></div>
        <section>
          <Grid id="about_me">
            <Grid.Column mobile={16} tablet={16} computer={8} className='about_me_text'>
              <div className='text'>
                <h2>À propos de moi ...</h2>
                <p>Bonjour, je m’appelle Alice. Je suis professeur de yoga certifiée yoga alliance 200h, en yoga vinyasa « Vanda Scaravelli ».</p>
                <p>Mon souhait est d'offrir des cours créatifs et bienveillants dans le respect des corps et des personnalités de chacun.</p>
                <Link to='/yoga-alice'>En savoir plus</Link>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <img src={`${api}/images/pose1.jpg`} alt='Alice Olagnon' />
            </Grid.Column>
          </Grid>
        </section>
        <section>
          <Grid>
            <div className="greenBanner colorAnimation" id="shiatsu">
              <h2>Cours</h2>
              <p>Je propose un yoga intuitif et bienveillant,
              inspiré de mes différentes pratiques ( vinyasa, shiatsu, qi gong, mindfullness) </p>
              <p>Mes cours sont basés sur les principes fondamentaux de l'énergétique chinoise
              (adaptation de la pratique en fonction de l'heure de la journée, et de la saison)
              et soutenue par des exercices de méditation en pleine conscience. </p>
              <p>En alignant la pratique des asanas à celle de la méditation, chacun apprivoise peu à peu son corps,
              développe son intuition et son mouvement naturel. </p>
              <p>Mon envie ? Révéler l'intelligence naturelle de votre corps,
              et vous faire prendre conscience de vos possibilités infinies.</p>
              <Button>En savoir plus</Button>
            </div>
          </Grid>
        </section>

        <section className="mosaiq">
          <Grid>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <figure className="diapo">
                <img src={`${api}/images/cours-cadre.jpg`} alt='informations stages' />
              </figure>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <div className="text" id="cours">
                <article className="txtCenter">
                  <h2>Stages</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit finibus, faucibus velit sed, fermentum
                    eros. Aliquam consequat efficitur turpis. Suspendisse vel blandit ante, id placerat tortor. Nunc viverra pulvinar
                    tellus ac tempor. Duis consequat arcu vel arcu pretium auctor. Aliquam sit amet interdum diam. Vestibulum diam
                    nulla, lacinia vitae dignissim quis, posuere ut sapien. Nullam aliquam purus eu est porttitor faucibus. Duis
                    in nibh turpis.</p>
                  <Link to='/stages'>En savoir plus</Link>
                </article>
              </div>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <div className="text" id="stages">
                <article className="txtCenter">
                  <h2>Shiatsu</h2>
                  <p>Je suis diplômée en shiatsu traditionnel auprès de Bernard Bouheret.</p>
                  <p>Je vous reçois donc à mon domicile (prévoyez 1h30 sur place).</p>
                  <p>Le shiatsu est une technique manuelle japonaise favorisant la bonne circulation énergétique dans le corps. Il est particulièrement recommandé en cas :</p>
                  <ul>
                    <li>Prévenir l’anxiété, stress</li>
                    <li>Soulager les maux de dos, tensions</li>
                    <li>Soutenir le corps en cas de fatigue, épuisement</li>
                    <li>Prévenir les troubles du sommeil</li>
                    <li>Prévenir les maux digestifs</li>
                  </ul>
                  <Link to='/shiatsu'>En savoir plus</Link>
                </article>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <figure className="diapo">
                <img src={`${api}/images/stage-session-cadre.jpg`} alt='informations shiatsu' />
              </figure>
            </Grid.Column>
          </Grid>
        </section>
        <div id="forme-parallax-3" className="rotate"></div>
        <div className="parallax"></div>
        <section>
          <h2 style={{ marginTop: '50px' }}>Inspirations</h2>
          <Grid centered doubling columns={4} id='inspiration-bloc'>

            <Grid id="inspirations">
              {this.props.inspirations
                .sort((a, b) => b.createdAt - a.createdAt)
                .slice(0, 4)
                .map(i => <InspirationCard inspiration={i} key={i.id} />)}
            </Grid>
            <Grid.Row id="see-all-inspi">
              <p><Link to="/inspirations">Voir toutes les inspirations</Link></p>
            </Grid.Row>
          </Grid>
        </section>
        <div id="avis" className="quote">
          <p>"Des cours qui réveillent tout le corps, donnent la pêche et permettent aussi des moments de détente tout en douceur! Un dosage parfait! Merci Alice!"</p>
          <p>Julie, Cours du mardi</p>
        </div>
        <section id="contact-background">
          <h2 id='contact'>Me contacter</h2>
          <p id='contactText'>Si vous avez la moindre question concernant les cours, les stages, ou le shiatsu à me poser,
          n'hésitez pas à me contacter par email ou via Facebook. Je vous répondrai au plus vite.</p>
          <Button className='contactButton'><Icon name='facebook f' />Facebook</Button>
          <Button className='contactButton'><Icon name='mail' />Email</Button>
          <BackToTopBtn />
        </section>
        <Footer />
      </Container>
    )
  }
}

export default Home
