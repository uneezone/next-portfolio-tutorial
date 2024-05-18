import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 빡빡이 입니다!
          <br className="hidden lg:inline-block" />
          오늘도 빡코딩?
        </h1>
        <p className="mb-8 leading-relaxed">
          환경권의 내용과 행사에 관하여는 법률로 정한다. 농업생산성의 제고와
          농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의
          임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다. 국무회의는
          정부의 권한에 속하는 중요한 정책을 심의한다. 정당의 목적이나 활동이
          민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할
          수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다. 헌법재판소
          재판관은 정당에 가입하거나 정치에 관여할 수 없다. 대통령이 임시회의
          집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" legacyBehavior>
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
