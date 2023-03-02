import './team.css'
import { avatar01, avatar02, avatar03, avatar04, avatar05 } from './imports'

function Team() {
  return (
    <div className='team'>
      <div className='team__description'>
        <h2>Our team</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque donec est vitae ut nibh.<br/>Aliquam dui ac dictum et mollis sagittis ut tortor nibh.</p>
      </div>
      <div className='team__members'>
        <div className='team__members__presentation'>
          <img src={avatar01} alt='ceo avatar' />
          <div className='team__members__description'>
            <p className='secondary-text'>CEO</p>
            <p className='main-text'>Michael Thompson</p>
          </div>
        </div>
        <div className='team__members__presentation'>
          <img src={avatar02} alt='hr avatar' />
          <div className='team__members__description'>
            <p className='secondary-text'>HR</p>
            <p className='main-text'>Stacey Baker</p>
          </div>
        </div>
        <div className='team__members__presentation'>
          <img src={avatar03} alt='Head of Design avatar' />
          <div className='team__members__description'>
            <p className='secondary-text'>Head of Design</p>
            <p className='main-text'>Rachael Harper</p>
          </div>
        </div>
        <div className='team__members__presentation'>
          <img src={avatar04} alt='Head of Marketing avatar' />
          <div className='team__members__description'>
            <p className='secondary-text'>Head of Marketing</p>
            <p className='main-text'>Jessica Noble</p>
          </div>
        </div>
        <div className='team__members__presentation'>
          <img src={avatar05} alt='Head of Development avatar' />
          <div className='team__members__description'>
            <p className='secondary-text'>Head of Development</p>
            <p className='main-text'>Patrick Carpenter</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
