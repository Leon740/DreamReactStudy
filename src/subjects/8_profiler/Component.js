import React, { Profiler } from "react";
import Car from "./Car";

// useTransition
// === Concept
// === Problem
// 1) the components should be optimized (reduce the amount of renders)
// 2) to check the amount of renders we can use a useEffect:
// useEffect(() => {
//   console.log("render");
// });
// Solution
// 1) React has (Profiler) component which checks the amount of renders and many other things
// 2) usage: <Profiler id="string" onRender={callback} >
// 3) (id) is mostly a Component name, (onRender) is a callback which is called on each render

const carContainer = WrappedComponent => {
  return () => <WrappedComponent />;
};

const Component = () => {
  const CarFavorite = carContainer(Car);
  const CarDream = carContainer(Car);

  CarFavorite.displayName = "CarFavorite";
  CarDream.displayName = "CarDream";

  const carsOnRender = () => {
    // call when all nested is changed: (CarFavorite), (CarDream)
    console.log("carsOnRender");
  };
  const carDreamOnRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    // call only when (CarDream) is changed
    console.log("carDreamOnRender");
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    );
    // id: string — Проп id из дерева компонента Profiler, для которого было зафиксировано изменение. Может использоваться для определения той части дерева, которое было зафиксировано, если вы используете несколько профилировщиков.
    // phase: "mount" | "update" — Показывает, было ли дерево только что смонтировано в первый раз или повторно отрендерено в результате изменения пропсов, состояния или хуков.
    // actualDuration: number — Время, затраченное на рендеринг компонента Profiler и его дочерних компонентов для текущего обновления. Показывает насколько хорошо поддерево использует мемоизацию (например, React.memo, useMemo, shouldComponentUpdate). В идеальном случае это значение должно существенно снизиться после монтирования, так как многим из дочерних компонентов нужно будет перерендериваться только в случае, если изменяются их специфичные пропсы.
    // baseDuration: number — Длительность самого последнего рендеринга для каждого отдельного компонента внутри дерева компонента Profiler. Это значение оценивает стоимость рендера в наихудшем случае (например, изначальное монтирование или дерево без мемоизации).
    // startTime: number — Временная метка, когда React начал рендерить текущее обновление.
    // commitTime: number — Временная метка, когда React зафиксировал текущее обновление. Это значение доступно для всех профилировщиков при фиксации, позволяя группировать их, если в этом есть необходимость.
    // interactions: Set — Множество «взаимодействий», которые были зафиксированы во время подготовки изменения (например, когда render или setState были вызваны).
  };

  return (
    <Profiler id="cars" onRender={carsOnRender}>
      <CarFavorite />
      <Profiler id="CarDream" onRender={carDreamOnRender}>
        <CarDream />
      </Profiler>
    </Profiler>
  );
};

export default Component;
