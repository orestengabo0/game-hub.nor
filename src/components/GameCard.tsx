import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import PlatformListIcon from './PlatformListIcon'

interface Props{
    game: Game,
}

const GameCard = ({ game}: Props) => {
  return (
    <Card width={300} overflow={'hidden'} borderRadius={10}>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <PlatformListIcon platforms={game.parent_platforms.map(p => p.platform)}/>
        </CardBody>
    </Card>
  )
}

export default GameCard