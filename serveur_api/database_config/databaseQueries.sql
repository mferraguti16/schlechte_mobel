-- ====== COLOR FILTER WITH 2 PARAMS ====== --
SELECT
  furnitures.furniture_id as id,
  furniture_user.user_id as seller_id,
  categories.name as category,
  materials.name as material,
  conditions.name as condition,
  colors.name as color_main,
  secondary.name as color_secondary,
  dimensions,
  price,
  description,
  image
from
  furnitures
  right join furniture_user on furniture_user.furniture_id = furnitures.furniture_id
  left JOIN categories on category_id = furnitures.category
  left join colors on color_id = furnitures.color_main
  left join colors as secondary on secondary.color_id = furnitures.color_secondary
  left join conditions on condition_id = furnitures.condition
  left join materials on material_id = furnitures.material
Where 
  furnitures.color_main = $1
OR furnitures.color_secondary = $1
order by 
  id
limit $2;

-- ====== CONDITION FILTER WITH 2 PARAMS ===== --
SELECT
  furnitures.furniture_id as id,
  furniture_user.user_id as seller_id,
  categories.name as category,
  materials.name as material,
  conditions.name as condition,
  colors.name as color_main,
  secondary.name as color_secondary,
  dimensions,
  price,
  description,
  image
from
  furnitures
  right join furniture_user on furniture_user.furniture_id = furnitures.furniture_id
  left JOIN categories on category_id = furnitures.category
  left join colors on color_id = furnitures.color_main
  left join colors as secondary on secondary.color_id = furnitures.color_secondary
  left join conditions on condition_id = furnitures.condition
  left join materials on material_id = furnitures.material
Where 
  furnitures.condition = $1
order by 
  id
limit $2;

-- ===== CATEGORY FILTER WITH 2 PARAMS ==== --
SELECT
  furnitures.furniture_id as id,
  furniture_user.user_id as seller_id,
  categories.name as category,
  materials.name as material,
  conditions.name as condition,
  colors.name as color_main,
  secondary.name as color_secondary,
  dimensions,
  price,
  description,
  image
from
  furnitures
  right join furniture_user on furniture_user.furniture_id = furnitures.furniture_id
  left JOIN categories on category_id = furnitures.category
  left join colors on color_id = furnitures.color_main
  left join colors as secondary on secondary.color_id = furnitures.color_secondary
  left join conditions on condition_id = furnitures.condition
  left join materials on material_id = furnitures.material
Where
  furnitures.category = $1
order by
  id
limit
  $2;

-- ===== FURNITURE SELECT BY ID WITH 1 PARAMS ==== --
SELECT
  furnitures.furniture_id as id,
  furniture_user.user_id as seller_id,
  categories.name as category,
  materials.name as material,
  conditions.name as condition,
  colors.name as color_main,
  secondary.name as color_secondary,
  dimensions,
  price,
  description,
  image
from
  furnitures
  right join furniture_user on furniture_user.furniture_id = furnitures.furniture_id
  left JOIN categories on category_id = furnitures.category
  left join colors on color_id = furnitures.color_main
  left join colors as secondary on secondary.color_id = furnitures.color_secondary
  left join conditions on condition_id = furnitures.condition
  left join materials on material_id = furnitures.material
Where
  id = $1;

-- ===== ALL FURNITURES SELECT WITH 2 PARAMS ===== ---
-- === Params: Starting id & max number of responses === --
SELECT
  furnitures.furniture_id AS id,
  furniture_user.user_id AS seller_id,
  categories.name AS category,
  materials.name AS material,
  conditions.name AS condition,
  colors.name AS color_main,
  secondary.name AS color_secondary,
  dimensions,
  price,
  description,
  image
FROM
  furnitures
  right join furniture_user on furniture_user.furniture_id = furnitures.furniture_id
  LEFT JOIN categories ON category_id = furnitures.category
  LEFT JOIN colors ON color_id = furnitures.color_main
  LEFT JOIN colors AS secondary ON secondary.color_id = furnitures.color_secondary
  LEFT JOIN conditions ON condition_id = furnitures.condition
  LEFT JOIN materials ON material_id = furnitures.material
WHERE
  id >= $1
ORDER BY
  id
LIMIT
  $2;    

  -- ===== PRICE FILTER WITH 3 PARAMS ===== --
  -- == Params: Min price, Max price & max number of response == --
  SELECT
  furnitures.furniture_id as id,
  furniture_user.user_id as seller_id,
  categories.name as category,
  materials.name as material,
  conditions.name as condition,
  colors.name as color_main,
  secondary.name as color_secondary,
  dimensions,
  price,
  description,
  image
from
  furnitures
  right join furniture_user on furniture_user.furniture_id = furnitures.furniture_id
  left JOIN categories on category_id = furnitures.category
  left join colors on color_id = furnitures.color_main
  left join colors as secondary on secondary.color_id = furnitures.color_secondary
  left join conditions on condition_id = furnitures.condition
  left join materials on material_id = furnitures.material
Where
  furnitures.price >= $1
  AND furnitures.price < $2
order by
  id
limit
  $3;
