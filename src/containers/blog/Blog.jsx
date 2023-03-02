import './blog.css'
import { blog01, blog02, blog03 } from './imports'

function Blog() {
  return (
    <div className='blog'>
      <div className='blog__head'>
        <h2>Blog of the month</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ut laoreet hendrerit aliquet nisl massa at arcu diam.<br/>
          Quisque venenatis dignissim ullamcorper dis. Augue tortor facilisis cursus integer consectetur laoreet lectus.<br/>
          At arcu volutpat facilisis neque sed facilisis egestas quis urna.
        </p>
      </div>
      <div className='blog__cardList'>
        <div className='card'>
          <img src={blog01} alt='first card image' />
          <div className='card__body'>
            <div className='card__body__content'>
              <div className='card__body__content__badges'>
                <p>UX</p>
                <p>UI</p>
              </div>
              <div className='card__body__content__description'>
                <h3>Design Kit</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Turpis nisl eu leo accumsan auctor laoreet tristique facilisis.</p>
              </div>
            </div>
            <div className='card__body__cta'>
              <a href='#'>Learn more</a>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src={blog02} alt='second card image' />
          <div className='card__body'>
            <div className='card__body__content'>
              <div className='card__body__content__badges'>
                <p>Workshop</p>
                <p>UX</p>
              </div>
              <div className='card__body__content__description'>
                <h3>Ux Research</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Turpis nisl eu leo accumsan auctor laoreet tristique facilisis.</p>
              </div>
            </div>
            <div className='card__body__cta'>
              <a href='#'>Learn more</a>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src={blog03} alt='third card image' />
          <div className='card__body'>
            <div className='card__body__content'>
              <div className='card__body__content__badges'>
                <p>Development</p>
              </div>
              <div className='card__body__content__description'>
                <h3>React Native</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Turpis nisl eu leo accumsan auctor laoreet tristique facilisis.</p>
              </div>
            </div>
            <div className='card__body__cta'>
              <a href='#'>Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
