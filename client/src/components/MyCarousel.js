import React, {useEffect, useState} from 'react';
import Carousel from 'react-multi-carousel';
import '../../node_modules/react-multi-carousel/lib/styles.css';
import '../App.css';
import Card from './Card';

function MyCarousel(props) {
    
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState();

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    useEffect(() => {
        setData(props.data);
        setDataType(props.dataType);
    }, []);

    const masterRender = () => {
        let slicedType = dataType.slice(0, dataType.length - 1);
        return (
        <div>
            <div key={`${dataType}-header`}>
              <h2>Top {dataType}</h2>
            </div>
            <span>
             <Carousel 
             swipeable={false}
             draggable={false}
             showDots={true}
             responsive={responsive}
             infinite
             className="carousel">
             {data.map((item, i) => <Card key={i} dataType={slicedType} data={item} />)}
             
             </Carousel>
            </span>
        </div>
        )
    }
  return (       
    <div className='up-space' key="content">
      {dataType && data.length > 0 ? masterRender() : <></>}
    </div>
  );
}

export default MyCarousel;
