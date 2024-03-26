import { Flex, Heading, Grid } from '@radix-ui/themes'
import React from 'react'
import styles from './sponsor.module.scss'
import LDA from 'src/assets/lda_logo.webp'
import ThaiData from 'src/assets/thaidata_logo.webp'
import Advice from 'src/assets/advice_logo.webp'
import Cpe from 'src/assets/cpe_logo.svg'
import Kmutt from 'src/assets/kmutt_logo.svg'
import Applicad from 'src/assets/applicad_logo.webp'
import YIP from 'src/assets/YIP_LOGO.png'
import KBTG from 'src/assets/KBTG_logo.webp'
import IRPC from 'src/assets/IRPC_logo.webp'

interface ISponsor {
  img: string
  level?: string
}

const Sponsors: ISponsor[] = [
  {
    img: Advice,
    level: 'Diamond',
  },
  {
    img: YIP,
    level: 'Diamond',
  },
  {
    img: KBTG,
    level: 'Diamond',
  },
  {
    img: LDA,
    level: 'Platinum',
  },
  {
    img: IRPC,
    level: 'Platinum',
  },
  {
    img: ThaiData,
    level: 'Gold',
  },
  {
    img: Applicad,
    level: 'Gold',
  },
]

const Sponsor: React.FC = () => {
  const renderSponsor = (rank: string) => {
    return Sponsors.filter((sponsor) => sponsor.level === rank).map((sponsor, i) => {
      let size_img_h = '60px' // Default size for all ranks
      let size_img_w = 'auto'
      if (rank === 'Diamond') {
        size_img_h = '160px' // Adjust size for Diamond rank
      } else if (rank === 'Platinum') {
        size_img_h = '100px' // Adjust size for Platinum rank
      } else if (rank === 'Gold') {
        size_img_w = '200px' // Adjust size for Gold rank
      }
      return (
        <div key={i} className={styles.logo}>
          <img src={sponsor.img} style={{ height: size_img_h, width: size_img_w }} alt={`sponsor-${i}`} />
        </div>
      )
    })
  }

  return (
    <Flex direction="column" justify="center" align="center" className={styles.sponsor} mt={{ initial: '9', md: '0' }}>
      <div className={styles.bg_logo_top}>
        <img src={Kmutt} alt="kmutt" style={{ height: '140px' }} />
        <img src={Cpe} alt="cpe" style={{ height: '120px' }} />
      </div>
      <Heading size={{ initial: '8', md: '9' }} className="title">
        SPONSOR
      </Heading>
      <div style={{ width: '80%' }}>
        <Grid columns={{ initial: '3', sm: '3', md: '3' }} className={styles.contents}>
          {renderSponsor('Diamond')}
        </Grid>
        <Grid columns={{ initial: '2', sm: '2', md: '2' }} className={styles.contents}>
          {renderSponsor('Platinum')}
        </Grid>
        <Grid columns={{ initial: '2', sm: '2', md: '2' }} className={styles.contents}>
          {renderSponsor('Gold')}
        </Grid>
      </div>
    </Flex>
  )
}

export default Sponsor
