import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


function CardSkeleton({count}) {
  let cards = [];
  for(let i=0;i<count;i++) {
    cards.push(
        <div className='item-card' key={i}>
          <SkeletonTheme>
            <Skeleton style={{height:'9.65rem',alignSelf:'center'}}/>
            <Skeleton style={{width:'3rem'}} />
            <Skeleton count={2} style={{marginBottom:'10px',}} />
            <Skeleton style={{width:'4rem'}} />
          </SkeletonTheme>
        </div>
    )
  }

  return (cards)
}

export default CardSkeleton