import Image from 'next/image';

export default function List() {
    let goodsList = ['Tomatoes', 'Pasta', 'Coconut']
    return (
      <div>
        <h4 className="title">상품목록</h4>
        <ul>
            { 
                goodsList.map((goods, idx)=>{
                return ( 
                    <li className="food" key={idx}>
                        <span className="thum">
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/next.svg"
                            alt="Next.js Logo"
                            width={180}
                            height={37}
                            priority
                        />
                        </span>
                        { goodsList[idx] }
                    </li>
                )
            }) }
        </ul>
      </div>
    )
} 