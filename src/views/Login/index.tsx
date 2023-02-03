import React, { useEffect } from 'react'
import { Button, Input, Space } from 'antd'
import initLoginBg from './init.ts'
import styles from './login.module.scss'
import './login.less'

const View = () => {
  // 背景处理
  useEffect(() => {
    initLoginBg()
    window.onresize = function () { initLoginBg() }
  }, [])
  return (
    <div className={styles.loginPage}>
        {/* 背景 */}
        <canvas id="canvas" style={{ display: 'block' }}></canvas>
        {/* 中心盒子 */}
        <div className={styles.loginBox + ' loginbox'}>
            <div className={styles.title}>
                <h1>后台系统</h1>
                <p>Strive Everyday</p>
            </div>
            <div className='from'>
              <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                  <Input placeholder="用户名" className='ipt'/>
                  <Input.Password placeholder="密码" className='ipt'/>
                  <div className='captchaBox'>
                    <Input placeholder="验证码" className='ipt'/>
                    <div className="captchaImg">
                    {/* <img src="xxx" height="38" alt="" /> */}
                    <span style={{ lineHeight: '38px' }}>1234</span>
                    </div>
                  </div>
                  <Button type='primary' block>登录</Button>
              </Space>
            </div>
        </div>
    </div>
  )
}
export default View
