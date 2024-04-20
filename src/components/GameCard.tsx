import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformListIcon from './PlatformListIcon'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface Props{
    game: Game,
}

const GameCard = ({ game}: Props) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <HStack justifyContent='space-between'>
              <PlatformListIcon platforms={game.parent_platforms.map(p => p.platform)}/>
              <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top}/></Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard