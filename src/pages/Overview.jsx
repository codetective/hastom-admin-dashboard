import { Box, SimpleGrid, Stack } from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import PageTitle from '../components/Global/PageTitle';
import { ImNewspaper } from 'react-icons/im';
import { FaUserFriends,FaCalendarAlt } from 'react-icons/fa';
import { SiGooglemessages } from 'react-icons/si';
import { GiGroundSprout } from 'react-icons/gi';
import OverviewCard from '../components/Overview/OverviewCard';
import SubscriptionOverview from '../components/Overview/SubscriptionOverview';
import {getCycle} from '../apiServices/cycleServices';
import {getArticles} from '../apiServices/articleService';
import ContentLoader from '../components/ContentLoader/ContentLoader';

const Overview = () => {
  const [totalCycles, setTotalCycles] = useState(0)
  const [totalArticles, setTotalArticles] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetch = async() => {
      setIsLoading(true)
      try{
        const res = await getCycle()
        setTotalCycles(res.data.data.length)
        setIsLoading(false)
      }
      catch(err){
        console.log(err)
      }
    }
    fetch()
  }, [])

  useEffect(() => {
    const fetch = async() => {
      setIsLoading(true)
      try{
        const res = await getArticles()
        setTotalArticles(res.data.meta.total)
      }
      catch(err){
        console.log(err)
      }
    }
    fetch()
  }, [])

  return (
    isLoading ?
    <ContentLoader />
    :
    <Box pb="50px">
      <PageTitle category={'Overview'} title="Dashboard" />
      <Stack spacing="30px">
        <SimpleGrid columns={[1, 2, 2, 2,4]} spacing="3">
          <OverviewCard
              pageLink="/users"
              title="Total Users"
              icon={FaUserFriends}
              stat={100}
          />
          <OverviewCard
              pageLink="/subscriptions"
              title="Pending Orders"
              icon={GiGroundSprout}
              stat={0}
          />
          <OverviewCard
              pageLink="/cycle"
              title="Cycles"
              icon={FaCalendarAlt}
              stat={totalCycles}
          />
          <OverviewCard
            pageLink="/posts"
            title="Blog posts"
            icon={ImNewspaper}
            stat={totalArticles}
          />

        </SimpleGrid>

        {/* <SimpleGrid columns={[1, 1, 1, 2]} spacing="40px">
         <SubscriptionOverview />
         <Box w="60%" py="10"></Box>
        </SimpleGrid> */}
      </Stack>
    </Box>
  );
}

export default Overview;