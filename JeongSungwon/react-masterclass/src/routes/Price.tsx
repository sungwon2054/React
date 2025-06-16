import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinHistory } from "../api";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  flex-basis: 60px;
`

const CoinDate = styled.div`
  flex-grow: 1;
  text-align: center;
`

const CoinPrice = styled.div`
  flex-grow: 1;
  text-align: center;
`

function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  const sortHighData = data?.sort((a, b) => {
    return a.high - b.high;
  });
  const sortLowData = data?.sort((a, b) => {
    return a.low - b.low;
  });
  
  return (
    <div>
      {isLoading ? "Loading chart..." : (
        <Container>
          <Item>
            <Title></Title>
            <CoinDate>날짜</CoinDate>
            <CoinPrice>가격</CoinPrice>
          </Item>
          <Item>
            <Title>최고가</Title>
            <CoinDate>
              {sortHighData && sortHighData.length > 0 
                ? new Date(Number(sortHighData[sortHighData.length - 1].time_close) * 1000).toLocaleDateString()
                : "N/A"
              }
            </CoinDate>
            <CoinPrice>{sortHighData?.[sortHighData.length - 1].high}</CoinPrice>
          </Item>
          <Item>
            <Title>최저가</Title>
            <CoinDate>
              {sortLowData && sortLowData.length > 0 
                ? new Date(Number(sortLowData[0].time_close) * 1000).toLocaleDateString()
                : "N/A"
              }</CoinDate>
            <CoinPrice>{sortLowData?.[0].low}</CoinPrice>
          </Item>
      </Container>
      )}
    </div>
  )
}

export default Price;
