'use client'
import { useDispatch } from 'react-redux'
import { Button } from '../button/page'
import { cartActions } from '@/redux/features/cart/index'
import style from './Modal.module.scss'

interface Modal {
  setValue: (value: any) => any
  id: string | number
}

export const Modal = ({ setValue, id }: Modal) => {
  const dispatch = useDispatch()
  return (
    <>
      <div onClick={() => setValue((value: boolean) => !value)} className={style.overlay}></div>
      <div className={style.modal}>
        <div className={style.header}>
          <p className={style.header__title}>Удаление билета</p>
          <Button
            onClick={() => setValue((value: boolean) => !value)}
            variant="text"
            sx="small"
            color="red"
          >
            del
            {/* <Image src="./icons/close.svg" width={12} height={12} alt="close" /> */}
          </Button>
        </div>
        <div className={style.content}>
          <p className={style.text}>Вы уверены, что хотите удалить билет?</p>
        </div>
        <div className={style.btns}>
          <Button
            onClick={() => {
              dispatch(cartActions.reset(id))
              setValue((value: boolean) => !value)
            }}
            variant="contained"
            sx="default"
            color="red"
          >
            Да
            {/* <Image src="./icons/close.svg" width={12} height={12} alt="close" /> */}
          </Button>
          <Button
            onClick={() => setValue((value: boolean) => !value)}
            variant="outlined"
            sx="default"
            color="red"
          >
            Нет
            {/* <Image src="./icons/close.svg" width={12} height={12} alt="close" /> */}
          </Button>
        </div>
      </div>
    </>
  )
}
