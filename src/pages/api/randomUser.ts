// Next.js API 라우트를 위한 타입 임포트
import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

// 사용자 데이터를 위한 인터페이스 정의
interface UserResponse {
  results: Array<{
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    email: string;
    phone: string;
    cell: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
  }>;
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

// 오류 응답을 위한 인터페이스
interface ErrorResponse {
  error: string;
  statusCode?: number; // 서버 응답 코드를 추가적으로 제공할 수 있습니다.
}

// Next.js API 핸들러 함수 작성
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserResponse | ErrorResponse>
) {
  try {
    const response = await axios.get<UserResponse>(
      "https://randomuser.me/api/"
    );
    console.log(response);
    res.status(200).json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    // Axios 오류 처리
    if (axiosError.response) {
      // 서버로부터 응답을 받았지만 오류가 발생한 경우
      res.status(axiosError.response.status).json({
        error: axiosError.message,
        statusCode: axiosError.response.status,
      });
    } else {
      // 요청이 만들어지기도 전에 오류가 발생한 경우
      res.status(500).json({ error: axiosError.message });
    }
  }
}
