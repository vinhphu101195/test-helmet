import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      Hello{" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hello test page</title>
        <meta
          name="description"
          content="Vào app để kết bạn trò chuyện ngay nào! Tải về ứng dụng ở CH Play Apple Store EVILA để mở yến tiệc tưng bừng cùng nhiều idol xinh đẹp."
        />
        <meta
          name="keywords"
          content="evila, show bigo, livestream, nimo tv, trực tiếp, phòng kín, yến tiệc, idol"
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image"
          content="https://static.evi.la/resource/wm/og_evila_default.jpg"
        />
        <meta
          property="og:image:alt"
          content="evila, idol, livestream, show, sexy, bae"
        />

        <meta
          property="og:title"
          content="Xem livestream trực tiếp tại Evila"
        />
        <meta
          property="og:description"
          content="Vào app để kết bạn trò chuyện ngay nào! Tải về ứng dụng ở CH Play Apple Store EVILA để mở yến tiệc tưng bừng cùng nhiều idol xinh đẹp."
        />
      </Helmet>
    </div>
  );
}

export default App;
