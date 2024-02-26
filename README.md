# Sheet

独自スプシのプロトタイプ

<br/><br/>

## 機能

- table 形式で input を描画
- onBlur で input の value を全て取得して submit できること
- 複数セルの copy & paste ができること

<br/><br/>

## 実装概要

- react-hook-form を利用して cell の value を 管理
  - （react-hook-form の [useFieldArray](https://react-hook-form.com/docs/usefieldarray) を用いて動的な行の追加・削除も実装可能）
- 選択中のセルは index を jotai で管理
- copy 時は選択中のセルの value を [getValues](https://react-hook-form.com/docs/useform/getvalues) で取得して、clipboard に tsv で格納
- paste 時は clipboard から tsv を取得して、選択中のセルの [setValue](https://react-hook-form.com/docs/useform/setvalue) で更新

<br/><br/>

## 使い方

`src/components/SampleSheet.tsx` を参考に。

```tsx
export const SampleSheet: React.FC = () => {
  const methods = useForm({ defaultValues });
  const { control, register, handleSubmit, getValues, setValue } = methods;

  const onSubmit = (data: unknown) => console.log("submit data: ", data);

  return (
    <Sheet getValues={getValues} setValue={setValue}>
      <form onBlur={handleSubmit(onSubmit)}>
        <CellInput cellIndex="0-0" register={register('name.1')} />
        <CellInput cellIndex="0-1" register={register('name.2')} />
        {/* ...省略 */}
        <CellInput cellIndex="0-n" register={register('name.n')} />
      </form>
    </Sheet>
  )
```

1. `Sheet`コンポーネント内で`CellInput`を並べる
2. `Sheet`コンポーネントに`react-hook-form`の`getValues`と`setValue`を渡す

<br/><br/>

## api

動作確認のために活用している open な api

https://studio.apollographql.com/public/star-wars-swapi/variant/current/explorer
