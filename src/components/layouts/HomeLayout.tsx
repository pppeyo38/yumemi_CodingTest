import { SetStateAction } from 'react'
import { Chart } from '@/components/elements/Chart'
import { CheckBox } from '@/components/elements/CheckBox'
import { Title } from '@/components/elements/Title'
import { PopulaionResponse } from '@/types/api/Population'
import { PrefItem } from '@/types/api/Pref'

type Props = {
  prefList: PrefItem[]
  resData: PopulaionResponse
  getPopulation: (prefCode: number, prefName: string) => void
  setPrefList: (value: SetStateAction<PrefItem[]>) => void
}

export const HomeLayout = (props: Props) => {
  const { prefList, resData, getPopulation, setPrefList } = props

  const onCheckedBox = (checkPrefCode: number, checkPrefName: string) => {
    if (!prefList[checkPrefCode - 1].isChecked)
      getPopulation(checkPrefCode, checkPrefName)
    setPrefList((prevState) =>
      prevState.map((obj) =>
        obj.prefCode === checkPrefCode
          ? { ...obj, isChecked: !obj.isChecked }
          : obj,
      ),
    )
  }

  return (
    <section>
      <Title>都道府県別の総人口推移グラフ</Title>
      <div>
        {prefList.map((item, index) => (
          <CheckBox
            key={index}
            checked={item.isChecked}
            onChange={() => onCheckedBox(item.prefCode, item.prefName)}
          >
            {item.prefName}
          </CheckBox>
        ))}
        <Chart resData={resData} prefList={prefList} />
      </div>
    </section>
  )
}
