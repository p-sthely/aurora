import './logoClouds.css'
import { bootstrapLogo, figmaLogo, adobeLogo, nodeLogo, mondayLogo, gitkrakenLogo } from './imports'

function LogoClouds() {
  return (
    <div className='logoClouds'>
      <h2>They trust us !</h2>
      <div className='logoClouds__list'>
        <img src={bootstrapLogo} alt='bootstrap logo' />
        <img src={figmaLogo} alt='figma logo' />
        <img src={adobeLogo} alt='adobe logo' />
        <img src={nodeLogo} alt='node logo' />
        <img src={mondayLogo} alt='monday logo' />
        <img src={gitkrakenLogo} alt='gitkraken logo' />
      </div>
    </div>
  )
}

export default LogoClouds
