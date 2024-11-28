import { useLocation } from 'react-router-dom';
import imgsrc from '../../assets/images/9.png';
import './center.css';

function CenterContent() {
  const { state } = useLocation();
  const title = '个人中心' + state.id;

  return (
    <div className="ui-center">
      <h1>{title}</h1>
      <h2>
        获取参数测试：{state.id}
        {state.name}
      </h2>
      <img className="center-logo" src={imgsrc} alt="logo"></img>
    </div>
  );
}

export default function Center() {
  return <CenterContent></CenterContent>;
}
