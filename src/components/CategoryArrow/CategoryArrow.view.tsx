import React from 'react'

import styles from './CategoryArrow.module.css'

interface IProps {
  text: string
  className: string
}

const CategoryArrow: React.SFC<IProps> = ({ text, className }) => {
  return <div className={className}>{text}</div>
}

const ArrowLeft = CategoryArrow({ text: '<', className: styles.arrowPrev })
const ArrowRight = CategoryArrow({ text: '>', className: styles.arrowNext })

export default CategoryArrow

export { ArrowLeft, ArrowRight }
