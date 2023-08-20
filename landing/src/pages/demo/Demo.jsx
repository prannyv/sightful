import React, { useState} from 'react'
import styled from '@emotion/styled'
import DemoHeader from './DemoHeader'
import Analysis from './Analysis'
import SwitchTabs from './SwitchTabs'
import Setting from './Setting'

const Demo = () => {
  const [tab, setTab] = useState(1);

  return (
    <DemoContainer>
      <DemoHeader/>
      <SwitchTabs setTab={setTab}/>
      {tab === 1 ? <Analysis /> : <Setting />}
    </DemoContainer>
  )
}

const DemoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default Demo
