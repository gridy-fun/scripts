def get_coordinates_from_blockid(block_id, grid_width, grid_height):
    block_id_formatted = int(block_id)

    # Low-order terms
    x_low = (block_id_formatted % grid_width)
    block_id_formatted = block_id_formatted // grid_width
    y_low = (block_id_formatted % grid_height)

    # High-order terms
    x_high = (block_id_formatted // grid_height)
    y_high = block_id_formatted // (grid_width * grid_height)

    # Combine low and high-order terms
    x = x_low + (x_high * grid_width)
    y = y_low + (y_high * grid_height)

    return [x, y]



def get_blockid_from_coordinates(coordinates, grid_width, grid_height):
    x = coordinates[0]
    y = coordinates[1]

    # Low-order terms
    x_low = (x % grid_width)
    y_low = (y % grid_height)

    # High-order terms
    x_high = x // grid_width
    y_high = y // grid_height

    # Combine all terms
    block_id = (
        x_low +
        (y_low * grid_width) +
        (x_high * grid_width * grid_height) +
        (y_high * grid_width * grid_height * grid_height)
    )

    return block_id



# Inputs
coordinates = [12, 3000]
grid_width = 5000
grid_height = 4000

# Encoding
block_id = get_blockid_from_coordinates(coordinates, grid_width, grid_height)
print(f"Block ID: {block_id}")

# Decoding
decoded_coordinates = get_coordinates_from_blockid(block_id, grid_width, grid_height)
print(f"Coordinates: x={decoded_coordinates[0]}, y={decoded_coordinates[1]}")
