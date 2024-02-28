import { Flex, Heading, Grid } from '@radix-ui/themes'
import React from 'react'
import styles from './sponsor.module.scss'
import LDA from 'src/assets/lda.webp'
import ThaiData from 'src/assets/thaidata.webp'
import CPE from 'src/assets/cpe.webp'
import Advice from 'src/assets/advice.webp'

interface ISponsor {
  img: string
}

const Sponsors: ISponsor[] = [
  {
    img: Advice,
  },
  {
    img: LDA,
  },
  {
    img: ThaiData,
  },
  {
    img: CPE,
  },
]

const Sponsor: React.FC = () => {
  const renderSponsor = Sponsors.map((sponsor: ISponsor, i: number) => {
    return (
      <div key={i} className={styles.logo}>
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
