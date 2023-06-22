import React from 'react'

const FooterItem = ({item,path}) => {
  return (
    <a className="footer__link" link={path}>
    {item}
  </a>
  )
}

export default FooterItem
