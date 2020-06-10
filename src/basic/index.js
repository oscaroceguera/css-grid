import React from 'react'
import './styles.css'

const Basic = () => {
  return (
    <div>
      <h1>The grid container</h1>
      <div className='grid-container'>
        <div>grid item 1</div>
        <div>grid item 2</div>
        <div>grid item 3</div>
        <div>grid item 4</div>
        <div>grid item 5</div>
        <div>grid item 6</div>
        <div>grid item 7</div>
        <div>grid item 8</div>
        <div>grid item 9</div>
      </div>
      <h1>Repeat function</h1>
      <div className='grid-repeat'>
        <div>grid item 1</div>
        <div>grid item 2</div>
        <div>grid item 3</div>
        <div>grid item 4</div>
        <div>grid item 5</div>
        <div>grid item 6</div>
        <div>grid item 7</div>
        <div>grid item 8</div>
        <div>grid item 9</div>
      </div>
      <h1>Minmax function</h1>
      <div className='grid-minmax'>
        <div>grid item 1</div>
        <div>grid item 2</div>
        <div>grid item 3</div>
        <div>grid item 4</div>
        <div>grid item 5</div>
        <div>grid item 6</div>
        <div>grid item 7</div>
        <div>grid item 8</div>
        <div>grid item 9</div>
      </div>
      <h1>Gaps</h1>
      <div className='grid-gaps'>
        <div>grid item 1</div>
        <div>grid item 2</div>
        <div>grid item 3</div>
        <div>grid item 4</div>
        <div>grid item 5</div>
        <div>grid item 6</div>
        <div>grid item 7</div>
        <div>grid item 8</div>
        <div>grid item 9</div>
      </div>
      <h1>The grid items</h1>
      <div className='grid-items'>
        <div className='grid-item'>grid item 1</div>
        <div className='grid-item'>grid item 2</div>
        <div className='grid-item'>grid item 3</div>
        <div className='grid-item'>grid item 4</div>
        <div className='grid-item'>grid item 5</div>
        <div className='grid-item'>grid item 6</div>
        <div className='grid-item'>grid item 7</div>
        <div className='grid-item'>grid item 8</div>
        <div className='grid-item'>grid item 9</div>
      </div>
    </div>
  )
}

export default Basic;