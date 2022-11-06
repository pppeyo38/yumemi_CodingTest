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
    <div>
      <CheckboxGroup prefList={prefList} onCheckBox={onCheckBox} />
      <Chart prefList={prefList} resData={resPopulationData} />
    </div>
  )
}
