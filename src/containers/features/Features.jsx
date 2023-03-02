import './features.css'
import featureLogo from '../../assets/Vector.png'

const Feature = () => (
  <>
    <div className='feature__logo'>
      <img src={featureLogo} alt='feature logo' />
    </div>
    <div className='feature__description'>
      <h3>Feature</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Velit orci at pharetra iaculis enim. Arcu pellentesque congue.</p>
    </div>
  </>
)

function Features() {
  return (
    <div className='features'>
      <div className='features__description'>
        <div className='features__description__title'>
          <p>Easily and Quickly</p>
          <h2>Everything you need to build your projects</h2>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque donec est vitae ut nibh.<br />Aliquam dui ac dictum et mollis sagittis ut tortor nibh.</p>
      </div>
      <div className='features__list'>
        <div className='row'>
          <div className='feature'>
            <Feature />
          </div>
          <div className='feature'>
            <Feature />
          </div>
          <div className='feature'>
            <Feature />
          </div>
        </div>
        <div className='row'>
          <div className='feature'>
            <Feature />
          </div>
          <div className='feature'>
            <Feature />
          </div>
          <div className='feature'>
            <Feature />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
