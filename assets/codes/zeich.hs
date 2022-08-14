
{-# LANGUAGE TypeSynonymInstances #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE CPP #-}

import Data.Char
import Data.List

type 𝕾 = String

class OccupComputable a where
  occup :: a -> Int
  occupWithFence :: a -> Int
  occupWithFence x = 4 + occup x

instance OccupComputable Char where
  occup x = 𝛅 (isAscii x) 1 2

instance OccupComputable 𝕾 where
  occup xs = foldr ((+) occup) 0 xs

occupBound :: [𝕾] -> Int
occupBound xs = foldr (max . occup) 0 xs
occupBoundWithFence xs = 4 + occupBound xs

-- Data.List.transpose
𝛕 :: [[𝖆]] -> [[𝖆]] 
𝛕 ([]:_) = []
𝛕 xs = map head xs : 𝛕 (map tail xs)

data HorizonForm = HorBoth
  | HorLeft 
  | HorRight 
  deriving (Eq, Show)

line :: HorizonForm -> Int -> 𝕾
line HorLeft  n = '+' : replicate (n - 2) '-'
line HorRight n =       replicate (n - 2) '-' ++ ['+']
line HorBoth  n = '+' : replicate (n - 2) '-' ++ ['+']

-- `(. line HorRight) . (++)` as `\ x y -> x ++ line HorRight y`
lines𝖱 :: [Int] -> 𝕾
lines𝖱 xs = foldl 
  ((. line HorRight) . (++)) 
  (line HorBoth (head xs)) 
  (tail xs) ++ "\n"

space n = replicate n ' '
spaceX left right s = space left ++ s ++ space right

fence :: HorizonForm -> 𝕾 -> Int -> Int -> 𝕾
fence HorLeft  s left right = '|' : ' ' : spaceX left right s
fence HorRight s left right =       ' ' : spaceX left right s ++ " |"
fence HorBoth  s left right = '|' : ' ' : spaceX left right s ++ " |"

indexed :: [a] -> [(a, Int)]
indexed xs = zip xs [0..]

fences𝖱 xs = foldl 
  (\ x y -> x ++ fence HorRight (fst y) 0 0)
  (fence HorBoth (head xs) 0 0) 
  (tail (indexed xs)) ++ "\n"

fences𝖱𝛘 xs ns = foldl
  (\ x y -> x ++ fence HorRight (fst y) 0 (ns !! snd y))
  (fence HorBoth (head xs) 0 (head ns)) 
  (tail (indexed xs)) ++ "\n"

rowEntire𝖱 xs = lines𝖱 ns ++ fences𝖱 xs ++ lines𝖱 ns 
  where ns = map occupWithFence xs

-- 𝛘: absolute length list
rowCentre𝖱𝛘 xs 𝛘 = fences𝖱𝛘 xs h𝛘
  where h𝛘 = map d𝛘 (indexed 𝛘)
        d𝛘 = \ x -> (fst x) - occupWithFence (xs !! (snd x))

rowEntire𝖱𝛘 xs 𝛘 = lines𝖱 𝛘 ++ rowCentre𝖱𝛘 xs 𝛘 ++ lines𝖱 𝛘

table :: [[𝕾]] -> 𝕾
table xs = foldl 
  (\ x y -> x ++ rowCentre𝖱𝛘 y bounds)
  (rowEntire𝖱𝛘 (head xs) bounds)
  (tail xs) ++ lines𝖱 bounds
  where bounds = map occupBoundWithFence (𝛕 xs)
