import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width={300} overflow={'hidden'} borderRadius={10}>
        <Skeleton height={200}/>
        <CardBody>
            <SkeletonText spacing={4}/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton