import './test.scss';
import imgsrc from '../../assets/images/9.png';
// 引入相关的hooks
import { useAppDispatch, useAppSelector } from '@/store/hooks';
// 从store引入对应的方法
import { increment, decrement, incrementByAmount } from '@/store/state/counterSlice';
// 异步store
import { fetchProduct } from '@/store/state/productSlice';
import { Button } from 'antd';

export default function Test() {
  // 通过useSelector直接拿到store中定义的value
  const { value } = useAppSelector(state => state.counter);
  // const { list } = useAppSelector(state => state.product);
  // console.log('是否获取到数据', value, list);
  // 通过useDispatch 派发事件
  const dispatch = useAppDispatch();

  const addNum = () => {
    dispatch(increment(0));
    // console.log('加value', value);
  };
  const decNum = () => {
    dispatch(decrement(0));
    // console.log('减value', value);
  };

  const handleChangeCount = (val: number) => {
    dispatch(incrementByAmount(val));
  };

  const title = '测试页面标题';
  return (
    <div className="ui-test">
      <h1>{title}</h1>
      <img className="logo" src={imgsrc} alt="logo"></img>
      <h2>{value}</h2>
      <Button type="primary" className="btn" onClick={addNum}>
        加数字
      </Button>
      <Button className="btn" onClick={decNum}>
        减数字
      </Button>
      <Button type="primary" className="btn" onClick={() => handleChangeCount(10)}>
        增加任意值
      </Button>
      <div>
        <Button
          type="primary"
          onClick={() => {
            dispatch(fetchProduct());
          }}
        >
          获取商品数据
        </Button>
      </div>
    </div>
  );
}
