import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width={400} overflow={'hidden'} borderRadius={10}>
        <Skeleton height={250}/>
        <CardBody>
            <SkeletonText spacing={4}/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton