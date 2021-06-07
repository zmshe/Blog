import {useEffect} from 'react';
import './style.less';
import { SkinFilled } from '@ant-design/icons';
import {palletConfig} from '@src/config/pallet-config';
import AppStore from '@src/stores/app'
const Index = () => {
  const {theme, setTheme} = AppStore;

  useEffect(() => {
    const zmshe:HTMLElement | null = document.getElementById('zmshe-header');
    (zmshe as HTMLElement).style.background = theme.colour?.header
  }, [theme])

  const checkPallet = (item:string) => {
    localStorage.setItem('theme', JSON.stringify({
      theme:item,
      colour: palletConfig[item]
    }))
    setTheme({
      theme:item,
      colour: palletConfig[item]
    })
  }

  return (
    <div className="zmshe-header" id="zmshe-header">
      <div className="zmshe-header-extend">
        <div className="zmshe-header-pallet">
          <SkinFilled />
          <div className="zmshe-header-pallet-content">
            {
              Object.keys(palletConfig).map((item) => {
                return (
                  <div
                    key={item}
                    onClick={() => {
                      checkPallet(item)
                    }}
                    className="zmshe-header-pallet-item" 
                  >
                    {theme.theme!==item && <div className="zmshe-header-pallet-shade" />} 
                    {
                      Object.values(palletConfig[item]).map((color:any) => (
                        <div style={{background: color, width: '20%'}} key={color}/>
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