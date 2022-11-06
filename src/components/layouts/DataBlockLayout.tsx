import { css } from '@emotion/react'
import { Chart } from '@/components/elements/Chart'
import { CheckboxGroup } from '@/components/layouts/CheckboxGroup'
import { PopulaionResponse } from '@/types/api/Population'

import { PrefItem } from '@/types/api/Pref'

type Props = {
  prefList: PrefItem[]
  resPopulationData: PopulaionResponse
  onCheckBox: (checkPrefCode: number, checkPrefName: string) => void
}

export const DataBlockLayout = (props: Props) => {
  const { prefList, resPopulationData, onCheckBox } = props

  return (
    <div css={BlockStyle}>
      <Chart prefList={prefList} resData={resPopulationData} />
      <CheckboxGroup prefList={prefList} onCheckBox={onCheckBox} />
    </div>
  )
}

const BlockStyle = css`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 40px;

  @media screen and (max-width: 1280px) {
    gap: 40px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin: 40px 0;
  }
`
