import { Pokemon } from 'pokenode-ts';
import { fontPixelify } from '@/font';
import { pokemonTypeColors } from '@/maps/pokemonTypeColors';

interface Props {
  data: Pokemon;
  index: number;
}

export const Details = ({ data, index }: Props) => {
  return (
    <div className="w-full flex gap-2">
      <div className="pt-[3%]">
        <img
          src={data?.sprites?.other?.['official-artwork']?.front_default || ''}
          alt=""
          className="h-[90%] "
        />
        <div className="items-center justify-center">
          <h2 className="font-quicksand">N°{index}</h2>
          <h2 className="font-quicksand">
            Order°{data?.order}
          </h2>
        </div>
      </div>

      <div>
        <div>
          <div>
            <div>
              <h2
                
              >
                {data?.name}
              </h2>
              <div className="flex gap-2">
                {data?.types?.map((v) => (
                  <span
                    key={v.slot + '_' + v.type.name}
                    
                    style={{
                      backgroundColor:
                        pokemonTypeColors[
                          v?.type?.name as keyof typeof pokemonTypeColors
                        ],
                    }}
                  >
                    {v.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-center">
                <span className="font-bold">
                  Height
                </span>
                <span className="text-2xl font-quicksand font-bold">
                  {data.height || 0}
                </span>
              </div>

              <div className="flex text-center">
                <span className="font-bold ">
                  Weight
                </span>
              </div>
            </div>
          </div>
        </div>

        </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
