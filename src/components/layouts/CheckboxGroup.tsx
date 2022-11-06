import { CheckBox } from '@/components/elements/CheckBox'
import { PrefItem } from '@/types/api/Pref'

type Props = {
  prefList: PrefItem[]
  onCheckBox: (checkPrefCode: number, checkPrefName: string) => void
}

export const CheckboxGroup = ({ prefList, onCheckBox }: Props) => {
  const regionList = [
    { id: 0, region: '北海道地方' },
    { id: 1, region: '東北地方' },
    { id: 8, region: '関東地方' },
    { id: 15, region: '中部地方' },
    { id: 24, region: '近畿地方' },
    { id: 31, region: '中国地方' },
    { id: 36, region: '四国地方' },
    { id: 40, region: '九州地方' },
  ]

  return (
    <>
      {prefList.map((prefItem, index) => (
        <>
          {regionList.map(
            (regionObj) =>
              regionObj.id === prefItem.prefCode && <h2>{regionObj.region}</h2>,
          )}
          <CheckBox
            key={index}
            checked={prefItem.isChecked}
            onChange={() => onCheckBox(prefItem.prefCode, prefItem.prefName)}
          >
            {prefItem.prefName}
          </CheckBox>
        </>
      ))}
    </>
  )
}
