import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import SortableImageContainer from './SortableImageContainer'

const ImgContainer = SortableContainer(props => {
    return (
        <div>
            {props.images.map((image, index) => <SortableImageContainer
            key={image}
            index={index}
            image={image}
            />)}
        </div>
    )
})

export default ImgContainer