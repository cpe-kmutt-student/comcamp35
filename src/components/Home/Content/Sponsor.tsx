import { Flex, Heading, Grid } from '@radix-ui/themes'
import React from 'react'
import styles from './sponsor.module.scss'
import LDA_logo from 'src/assets/LDA_Logo_PNG-Main.png'
import THAIDATA_logo from 'src/assets/Thaidata_logo.png'
import CPE_logo from 'src/assets/CPE_logo.png'
import ADVICE_logo from 'src/assets/Advice_logo.png'

interface ISponsor {
  img: string
  level?: string
}

const Sponsorimg: ISponsor[] = [
  {
    img: ADVICE_logo,
    level: '140px',
  },
  {
    img: LDA_logo,
    level: '120px',
  },
  {
    img: THAIDATA_logo,
    level: '120px',
  },
  {
    img: CPE_logo,
    level: '100px',
  },
]

const Sponsor: React.FC = () => {
  const renderSponsor = Sponsorimg.map((sponsor, index) => {
    return (
      <div key={index} className={styles.bg}>
        <img src={sponsor.img} alt="sponsor" style={{ height: sponsor.level }} />
      </div>
    )
  })

  return (
    <Flex direction="column" justify="center" align="center" className={styles.sponsor} mt={{ initial: '9', md: '0' }}>
      <Heading size={{ initial: '8', md: '9' }} className="title">
        SPONSOR
      </Heading>
      <Grid columns={{ initial: '1', sm: '2', md: '4' }} className={styles.contents}>
        {renderSponsor}
      </Grid>
    </Flex>
  )
}

export default Sponsor
