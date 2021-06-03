import React from 'react';
import './style.less';
import { SkinFilled } from '@ant-design/icons';
import {palletConfig} from '@src/config/pallet-config'
const Index = () => {
  return (
    <div className="zmshe-header">
      <div className="zmshe-header-extend">
        <div className="zmshe-header-pallet">
          <SkinFilled />
          <div className="zmshe-pallet">
            {
              Object.keys(palletConfig).map((item) => {
                return (
                  <div onClick={() => {
                    document.body.style.background = palletConfig[item].background
                    console.log(palletConfig[item], 111)
                  }}>
                    {
                      Object.values(palletConfig[item]).map((color:any) => (
                        <div style={{background: color}}/>
                      ))
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Index;