import './footer.css'
import logoCreat from '../../assets/logoCreatFooter.png'
import { linkedIn, instagram, twitter, github, facebook } from './imports'

function Footer() {
  return (
    <div className='footer'>
      <div>
        <div className='footer__company-description'>
          <img src={logoCreat} alt='creat' />
          <p>Making the world a better place through constructing elegant hierarchies.</p>
          <div className='social-icons'>
            <img src={linkedIn} alt='linkedin ' />
            <img src={instagram} alt='instagram ' />
            <img src={twitter} alt='twitter ' />
            <img src={github} alt='github ' />
            <img src={facebook} alt='facebook' />
          </div>
        </div>
        <div className='footer__link-list'>
          <div className='footer__link-list__solutions'>
            <h3>Solutions</h3>
            <ul>
              <li><a href='#'>Marketing</a></li>
              <li><a href='#'>Analytics</a></li>
              <li><a href='#'>Commerce</a></li>
              <li><a href='#'>Insights</a></li>
            </ul>
          </div>
          <div className='footer__link-list__support'>
            <h3>Support</h3>
            <ul>
              <li><a href='#'>Pricing</a></li>
              <li><a href='#'>Documentation</a></li>
              <li><a href='#'>Guide</a></li>
              <li><a href='#'>API Status</a></li>
            </ul>
          </div>
          <div className='footer__link-list__company'>
            <h3>Company</h3>
            <ul>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Jobs</a></li>
              <li><a href='#'>Press</a></li>
              <li><a href='#'>Partners</a></li>
            </ul>
          </div>
          <div className='footer__link-list__legal'>
            <h3>Legal</h3>
            <ul> 
              <li><a href='#'>Claim</a></li>
              <li><a href='#'>Privacy</a></li>
              <li><a href='#'>Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 Creatiwity. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
