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

const Sponsors: ISponsor[] = [
  {
    img: ADVICE_logo,
  },
  {
    img: LDA_logo,
  },
  {
    img: THAIDATA_logo,
  },
  {
    img: CPE_logo,
  },
]

const Sponsor: React.FC = () => {
  const renderSponsor = Sponsors.map((sponsor: ISponsor, i: number) => {
    return (
      <div key={i} className={styles.sponsorLogo}>
        <img src={sponsor.img} alt="sponsor" width={200} loading="lazy" />
      </div>
    )
  })

  return (
    <Flex direction="column" justify="center" align="center" className={styles.sponsor} mt={{ initial: '9', md: '0' }}>
      <Heading size={{ initial: '8', md: '9' }} className="title">
        SPONSOR
      </Heading>
      <Grid
        columns={{ initial: '1', sm: '2', md: '4' }}
        gap="5"
        width="auto"
        justify="center"
        align="center"
        className={styles.contents}
      >
        {renderSponsor}
      </Grid>
    </Flex>
  )
}

export default Sponsor
