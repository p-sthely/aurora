import './cta.css'
import illustration from '../../assets/Illustration.png'

function Cta() {
  return (
    <div className='cta'>
      <div className='cta__content'>
        <div className='cta__content__head'>
          <h2>Boost your productivity.<br/>Start using our design kit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed faucibus nunc elementum lectus nulla lacinia turpis.
            Blandit ligula ac auctor ultricies. Ullamcorper ut enim non in cras bibendum euismod integer.
          </p>
        </div>
        <div className='cta__content__buttons'>
          <a className='button-primary' href='#'>Get started now</a>
          <a className='button-secondary' href='#'>Learn more</a>
        </div>
      </div>
      <div className='cta__illustration'>
        <img src={illustration} alt='cta illustration' />
      </div>
    </div>
  )
}

export default Cta
